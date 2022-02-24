
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Thu, 24 Feb 2022 19:33:27 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.290f green:0.290f blue:0.408f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.200f],
[UIColor colorWithRed:0.855f green:0.043f blue:0.043f alpha:0.812f],
[UIColor colorWithRed:0.953f green:0.851f blue:0.855f alpha:1.000f],
[UIColor colorWithRed:0.373f green:0.373f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.290f blue:0.408f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.945f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.294f green:0.396f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.294f blue:0.620f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:0.200f]
    ];
  });

  return colorArray;
}

@end
