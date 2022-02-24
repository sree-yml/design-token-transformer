
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 24 Feb 2022 19:33:27 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorLightHeaderTextColor0,
ColorLightHeaderTextColor1,
ColorLightAccentColor,
ColorLightSecondryBrandColor,
ColorLightBodyTextColor,
ColorLightIconBellColor,
ColorLightSurfaceColor,
ColorLightTertinaryColor,
ColorLightPrimaryBrandColor0,
ColorLightPrimaryBrandColor1
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
