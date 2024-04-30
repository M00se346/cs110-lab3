# cs110-lab3

Introduction

You will be accessing the most trending articles from the New York Times. However, what's trending this month might be different from what's trending today, so your application will show the top 5 most popular articles based on time period (day, week, month) and popularity criteria (most viewed, shared, emailed).

The New York Times API
You will be using the NYT Popular Article API to access popular articles. You'll be making a GET request using the fetch() function in your JavaScript code. In order to fetch articles, one person in your team will need to create a free account through the NYT dev portal: https://developer.nytimes.com/ Links to an external site. Please look at the Getting Started tab of this page to learn how to make an account and get an API Key (You will need this to make GET requests).

Here's the documentation for the NYT APIs (you'll only be working with the Popular Articles API): https://developer.nytimes.com/apis Links to an external site.

Requirements
In summary, your page needs to meet the following criteria:

Uses Fetch API / AJAX / other equivalents to poll the provided server to receive articles.
Articles
Article items must be clearly separated.
Article items must contain an image, title, abstract (description), and published date as shown in the example above.
Use Try/Catch for error handling as specified above.
A user must be able to select the popularity criteria and time frame.
Must follow a similar page layout to the image above (we will be lenient on some styling/sizing differences, but the layout should be very similar).
Must be responsive to screen size as shown above.
We also highly encourage you document your code with the use of JSDoc ( simple JSDoc function header annotations Links to an external site.would suffice Links to an external site.) especially for any code you write whose purpose may not be immediately obvious to the reader.

