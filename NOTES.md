# Notes about Tradeshift Triangle Challange (with React)

## Architecture

The challange is quite straighforward, I've decided to use React without any state manager since is not really necessary.
Honestly React is a bit overkill in this application, I could have done it in plain JS or use Preact (a smaller version or React).

The logic that evaluates if a triangle is a iscosceles scalene or equilateral is handled by the Triangle lib which has 100% coverage.

The Triangle is a class, and on creation of an triangle instance I check if the triangle is actually valid. The method `kind` will return which kind of triangle is.

## Tests

The UI and the Triangle class are tested with jest you can run them with:

    yarn test

## Deploy

You can check the app at https://tstc.now.sh/ . The app can be deployed by running:

    yarn deploy