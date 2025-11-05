Inheritance:
its a concept using which the child classes acquire the properties and behaviours of the
parent classes

eg:
car ->
chars: brand,model,speed
behaviours: start(),stop(),accelerate()

again car is very generic here, we can have fuel cars or electric cars and both of them kind of have the features of the car classes
and again both of them have things which are specific to them. the common things are inherited and the specific things are defined in their specific car class


eg:
class Car:{
string brand;
string model;
bool isEngineOn;
void start();
void stop();
}

class FuelCar: public Car{
//this FuelCar already has everything the Car class has now we have to define the things
specific to this FuelCar.

string currentGear=0;
void shiftGear(){
}
}

similarly for the electric car we can do :

class ElectricCar : public Car{
// this also has all the things whichthe Car class has. it inherited brother.
//here again we define the things specific to this Car
eg: chargeCar

void chargeCar()
}

syntax:
class child: <access_specifier> parent{
}
here if access_specifier is:
1.public: all the things in hte parent are public to the child class
2.private: all the things in the parent become private in the childclass again brother here they are accessible in the childclass but if some other class
extends or inherits the childclass say grandchild . they wont be accessible here
3.protected: all the things in parent become protected in childclass. child can access but other classes cant if they want they have to inherit

Polymorphism:
same object but different forms
1.runtime /dynamic Polymorphism: func overriding
2.compiletime/static Polymorphism: func overloading

1.runtime/dynamic
class parent{

public:
virtual void marriage(){
//pulamma
}

}
class child1:public parent{
 public:
  void marriage(){
  //rukmini vasanth
  }
  }

class child2:public parent{
public:
 void marriage(){
 //gal gadot
 }
 }

method overloading/compiletime/static:
same method but different parameters, same func name but diff parameters
eg:
int add(int a,int b){
return a+b;
}
float add(float a, int b){
return a+b;
}
