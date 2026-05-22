problems in a real world project if we dont follow design principles:
1. Maintainable: no bugs nd shit when we update or add a new feature
2. Readability: diffciult to understand 
3. bugs: a lot of them

Robert Martin the guy who published design principes in 2000. 

these design principles acronym is "SOLID" principles
- s: single responsibility principle(srp)
- o: open close principle(ocp)
- l: liskov substitution principle(lsp)
- i: interface segregation principle(isp)
- d: dependency inversion principle(dip)

# Single Responsibility Principle:

A class should have only one reason to change 
or
A class should do only one thing
all the attributes/behaviour of hte class should only do that specific thing

**NOTE:** single responsibility doesnt mean that there should be a single method in a class. it means whatever the methods are there all shold do the same task

## SRP VIOLATION - Bad Code:

```javascript
class Product{
  public Name;
  public price;
  private setProduct(name,price){
    this.Name=name;
    this.price=price;
  }
  public getProduct(name){
    return this.price;
  }
}

class ShoppingCart{
   product: Product;
   public total=0;
   
   public calculateTotalPrice(products){
     for(let product of products){
     total+=product.price;
     }
   }
   public storeCartInDb(){
   console.log("just store in db");
   }
   public PrintInvoice(){
   console.log("print invoice")
   }
 }
```

## FOLLOWING SRP - Good Code:

```javascript
class Product{
  public Name;
  public price;
  private setProduct(name,price){
    this.Name=name;
    this.price=price;
  }
  public getProduct(){
    return {this.Name, this.price};
  }
 } 

  class ShoppingCart{
   public total=0;
   
   public calculateTotalPrice(products){
     for(let product of products){
     total+=product.price;
     }
   }
  }

  class StoreCartInDb{
   public store(cart){
    console.log("store in db");
   }
  }
   class PrintInvoice{
    public print(cart){
    console.log("print invoice");
    }
  }
```

# Open Close Principle

A class should be open to add a new feature but should be close to modify the existing code

means, u can add new feature but dont fuckin touch the already existing code. 
wtf how can we impement without touching existing code. 
ans: oops: inheritance,abstraction,polymorhism

case : we have to add a new features to store the products in mongo also in a file . we have option to just add htese methods in the dbstore class?? right???
hell nah , your violating this...

how can we do it?
ans: oops: inheritance,abstraction,polymorhism
we can create a abstract class eg: DbPersistance with a method save() and create children classes savetoSql , savetoMongo, savetoFile and each have this save() method overriden with spefic to file/sql/mongo implementation

# Liskov substitution principle

subclassess should be substitutable for their base classes

eg: whereever we can use the base class we can substitute with the subclass , which means the subclass should only extend the feature of baseclass but shouldnt fuckup/break/narrow down exsiting code. 

eg: abstract class account: deposit,withdraw
subclasses: savingaccount,currentacc and fixedadepositaccount

in fd: we cant call withdraw coz theres like some fixed time we sholnt take money

case: if the user calls the subclass with the withdraw() same behaviour isnt expected, jesus. what am i writing. 

bad way to handle: 
jus use a if condition lol: if type of account is fixed only available is deposit and others have deposit and withdraw. 
but this now becomes tightly copuled and we may break open close principle

ok create like two classes: abstract

nonwithdrawableaccount: deposit
withdrawableaccount extends nonwithdrawableaccount

## LSP VIOLATION Example:

```javascript
abstract class Account{
  balance = 0;
  deposit(amount){ this.balance += amount; }
  withdraw(amount){ this.balance -= amount; }
}

class FixedDepositAccount extends Account{
  // LSP VIOLATION: Cannot withdraw before maturity!
  withdraw(amount){
    throw new Error("Cannot withdraw from fixed deposit before maturity");
  }
}

// Breaking client code:
function withdrawFunds(account, amount){
  if(account.balance >= amount){
    account.withdraw(amount); // This breaks for FixedDepositAccount!
  }
}
```

## FOLLOWING LSP - Good Code:

```javascript
abstract class Account{
  balance = 0;
  deposit(amount){ this.balance += amount; }
}

class WithdrawableAccount extends Account{
  withdraw(amount){ this.balance -= amount; }
}

class FixedDepositAccount extends Account{
  // Only deposit allowed - no withdrawal method
  // Substitutable everywhere Account is expected
}
```