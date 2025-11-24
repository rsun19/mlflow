import {
  t_global_font_size_body_sm,
  t_global_font_size_body_default,
  t_global_font_size_heading_xl,
  t_global_font_size_body_lg,
  t_global_font_weight_body_default,
  t_global_font_weight_body_bold,
  t_global_font_size_heading_lg,
} from "@patternfly/react-tokens";
import { convertRemStringToPx } from "../utils";

export const patternflyTypography = {
  // Font sizes
  fontSizeSm: convertRemStringToPx(t_global_font_size_body_sm.value),   // --pf-t--global--font--size--body--sm
  fontSizeBase: convertRemStringToPx(t_global_font_size_body_default.value), // --pf-t--global--font--size--body--default (PatternFly's base is slightly larger)
  fontSizeMd: convertRemStringToPx(t_global_font_size_body_default.value),   // same as base
  fontSizeLg: convertRemStringToPx(t_global_font_size_body_lg.value),   // --pf-t--global--font--size--body--lg
  fontSizeXl: convertRemStringToPx(t_global_font_size_heading_lg.value),   // heading sizes
  fontSizeXxl: convertRemStringToPx(t_global_font_size_heading_xl.value),  // larger heading sizes
  
  // // Line heights (PatternFly uses good defaults for readability)
  // lineHeightSm: t_global_font_size_body_sm.value,   // --pf-t--global--font--line-height--body
  // lineHeightBase: t_global_font_size_body_default.value, // --pf-t--global--font--line-height--body
  // lineHeightMd: t_global_font_size_body_default.value,   // same as base
  // lineHeightLg: t_global_font_size_body_lg.value,   // --pf-t--global--font--line-height--heading
  // lineHeightXl: t_global_font_size_heading_xl.value,   // --pf-t--global--font--line-height--heading
  // lineHeightXxl: t_global_font_size_heading_2xl.value,
  
  // Font weights
  typographyRegularFontWeight: Number(t_global_font_weight_body_default.value), // --pf-t--global--font--weight--body--default
  typographyBoldFontWeight: Number(t_global_font_weight_body_bold.value),    // --pf-t--global--font--weight--body--bold (PatternFly uses 700 vs 600)
};