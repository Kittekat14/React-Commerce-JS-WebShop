# My first E-Commerce React App

I followed a [YouTube tutorial from JavaScript Mastery](https://www.youtube.com/watch?v=377AQ0y6LPA&t=10162s) on how to create my own little e-commerce store. This is a simple project, thanks to the library commerce.js, that allows a store owner to store products on their commerce.js-dashboard.

[Here](https://getcosy.netlify.app/) you find the deployed version, which I deployed with Netlify. Maybe I add some new products later, but since it's no real Web-Shop, I just wanted to utilize Material Ui with React to strengthen my abilities in these frameworks.

### Features:

- Users can add various goods to a shopping cart on the main products page
- Users can visit their shopping cart
- Users can remove a product from the cart
- Users can increase or decrease the quantity of each item inside the cart
- Users can empty the cart completely
- Users can go to the checkout form and enter a shipping address
- Users can enter a mock credit card number (provided by the payment service Stripe)
- Users can complete the checkout process by getting to the confirmation page
- Users as well as Store Owners get a confirmation email that the order has been received

The app is fully mobile-responsive.

**Payment Option Demo** (basically, continue typing "42" until the end of form):
Card number: 4242 4242 4242 4242
MM/YY: 04/24
CVC: 242
ZIP: 42424

### Technologies / packages used:

- React
- React-Router-DOM
- Material UI (for the Interface) and its "makeStyles"-Hook for the design and layout
- Commerce.js by Chec (which makes it very easy to build e-commerce-shops and store products in the backend)
- Stripe-js and React-Stripe-js (implemented payment method with package stripe.js for react, but not connected to real credit card, see Mock credit card number above)
- React-Hook-Form

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### User Stories:

- As a customer, I want to see all products of the store and their prices listed on the main page
- As a customer, I want to add goods from the main page of the store to my shopping cart, so that I can see them later when I go to my shopping cart
- As a customer, I want to be able to increase or decrease the number of items in the shopping cart, remove an item or empty the shopping cart completely
- As a customer, I want to see a review of all the products I want to buy listed in the checkout process before payment
- As a customer, I want to add my customer and order details easily in the checkout process (Shipping address and payment details in only two steps through a stepper (Material UI))
- As a customer, I want to get a confirmation email after the checkout process, so that I am sure that my order has been received
- As a shop owner, I want to be notified immediately when a user has placed an order and completed the checkout process, so that I can prepare for shipping

### Custom Components:

- NavBar
- Products -> Product
- Cart
- CheckoutForm -> Checkout (-> Confirmation), Review, CustomTextField, AddressForm, PaymentForm

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
