# Timestamp Microservice (FCC)

This project is a timestamp microservice API for the Free Code Camp Curriculum.  It takes a natural language date or unix timestamp date as a parameter, returning a json response with the date in both unix and natural language formats.  The service returns null if the input is neither format.

## Getting Started

Launch with node using <code>node server.js</code>.

## Sample Input

    https://obscure-sierra-15573.herokuapp.com/1450137600
    https://obscure-sierra-15573.herokuapp.com/December 15, 2015

## Sample Output

    { "unix": 1450137600, "natural": "December 15, 2015" }
