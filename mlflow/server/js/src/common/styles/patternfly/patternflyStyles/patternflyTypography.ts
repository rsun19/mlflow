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
  fontSizeSm: convertRemStringToPx(t_global_font_size_body_sm.value),
  fontSizeBase: convertRemStringToPx(t_global_font_size_body_default.value),
  fontSizeMd: convertRemStringToPx(t_global_font_size_body_default.value),
  fontSizeLg: convertRemStringToPx(t_global_font_size_body_lg.value),
  fontSizeXl: convertRemStringToPx(t_global_font_size_heading_lg.value),
  fontSizeXxl: convertRemStringToPx(t_global_font_size_heading_xl.value),

  typographyRegularFontWeight: Number(t_global_font_weight_body_default.value),
  typographyBoldFontWeight: Number(t_global_font_weight_body_bold.value),
};