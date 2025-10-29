cs history:
machine lang:
we have this bich ass binary in which we used to write the machine code. 
-very difficult and prone to error
-very tiresome process
-not at all scalable

assembly lang:
-it uses pnemonics, its also very tightly coupled to hardware
-not at all scalable coz its depended on hardware

procedural programming:
-before oops
introduced funcs, loops, blocks
-can do everything except building large scale apps
c is a good example

we move forward to oops:
1.real world modelling
2.data security
3.scalable/reusuable

any object has 2 properties:
1.characterstics: using which we can uniqulely identify(variables )
2.behaviour: funcs, what it can do

eg: car
characterstics:engine, model, brand, color etc 
behaviour: start,stop, gear shift , drift, horn , accelerate, break, 

what if we dont have oops:
car-
chars: brand, model, isEngineOn
behaviour: start(),stop(),gearShift()
if we had to represent in procedural
make vars: str brand,str model,bool isengineOn
functions:  start(),stop(),gearShift()

and for each car we would have a owner, it again is a object
so its not highly scalable, and theres like its all complicated shit 

we have oops bich:

class Car:{
string brand;
string model;
bool isEngineOn;
void start();
void stop();
}

class owner{
Car car;
string name,
void drive(){

}

}

oops: its nothing but objects interacting with each other

pillars of oops:
1.abstraction
2.encapsulation
3.inheritance
4.polymorphism


abstraction:
owner->Car(accelerate,break,gearShift)
we are hiding the under lying complexity from the owner about the internal implementation

in real life the objects are in abstracted form, it doesnt need to know everything about other objects.
eg: obj1,obj2 obj2 has kill() , obj1 shud jus know that obj2 has kill obj1 doesnt need to know the internal implementation of kill()


encapsulation:
eg: car-> its a combo of data/variables and methods

encapsulation means data binding.
it says the object shud have all the 
data security: 
theres a diff bw data hiding(abstraction) and data security(encapsulation). in hiding u dont need to know those internals and evenif u know we dont have a problem

but in data security u shouldnt know the internal details,
if u know we have a problem

brain-rot : kalisi unte kaladu sukham . lol 

we can implement the data security with the access modifiers
1.public: anyone can access from anywhere
2.private: only accessed within the class, no one can access from outside
3.protected: outside classes cant use but the inherited classes can use

if we make something private, the users cant do anything with them but we can do like getters and setters , its like they can just read the values not do anything to it.

