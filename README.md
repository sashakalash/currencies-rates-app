# CurreniesApp

Please provide a website developed with Angular with below functionalities.
* Requires a login page. Credentials can be checked hard-coded, no backend check is required.
* All other pages can be accessible after authentication.
* A page should be developed to collect crypto currency rates and store in ngrx. The api can be used to get the currency rates. Currency rates should be retrieved periodically, this period should be able to be chosen by the user from the page. It can be an input or a select element with pre-defined values. By default, it should be every 15 seconds. Please note that all other functionalities will use that currency rates. It means that the application is not responsible for the previous prices of the currencies, but should store the currencies rates which it retrieves.
* After getting each currency rates, each rate must be compared with the previous value. Depending on the difference between the previous and the current values, an icon must be shown to the user to let them know the last change of the currency. For instance, a green up icon can be shown when the price goes high, or a red down icon if the price goes down, and another icon if the rate is same. Those icons must be shown in a limited time, and again users must be able to change the time which they want to see the icons on the page
