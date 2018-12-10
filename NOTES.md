# Notes

## Architecture

The challange is quite straighforward, I've decided to use React without any state manager since is not really necessary.
Honestly React is a bit overkill in this application, I could have done it in plain JS or use Preact (a smaller version or React).

The logic that evaluates if a triangle is a iscosceles scalene or equilateral is handled by the Triangle lib which has 100% tested.

The Triangle is a class, and on creation of an triangle instance I check if the triangle is actually valid. The method `kind` will return
the kind of triangle.