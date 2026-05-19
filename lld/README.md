# LLD Practice with TypeScript

## OOP Pillars

### 1. Abstraction (`src/abstraction.ts`)
Hiding internal complexity. Abstract classes define contracts without implementation.
- `PaymentProcessor` - abstract base class
- `CreditCardProcessor` & `PayPalProcessor` - concrete implementations
- Users don't need to know payment internal details

### 2. Encapsulation (`src/encapsulation.ts`)
Bundling data and methods, controlling access via private/public.
- `BankAccount` - private data protected
- `getBalance()`, `deposit()`, `withdraw()` - controlled public interface

### 3. Inheritance (`src/inheritance.ts`)
Child classes inherit parent properties.
- `Vehicle` → `Car` & `ElectricCar`
- Common `accelerate()`, specific `start()`/`stop()`

### 4. Polymorphism (`src/polymorphism.ts`)
Same interface, different forms.
- Method overriding: `Shape.area()` behaves differently per class
- Method overloading: `add(a, b)` vs `add(a, b, c)`

## Run
```bash
npm run start          # Run all exercises
npm run abstraction    # Run abstraction example
npm run encapsulation  # Run encapsulation example
npm run inheritance    # Run inheritance example
npm run polymorphism   # Run polymorphism example
```