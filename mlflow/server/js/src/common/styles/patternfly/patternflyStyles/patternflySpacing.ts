import { t_global_spacer_lg,
  t_global_spacer_md, t_global_spacer_sm,
  t_global_spacer_xl,
  t_global_spacer_xs,
  t_global_spacer_2xl,
  t_global_spacer_4xl,
  t_global_spacer_3xl,
} from "@patternfly/react-tokens";
import { convertRemStringToPx } from "../utils";

export const patternflySpacing = {
  xs: convertRemStringToPx(t_global_spacer_xs.value),  // --pf-t--global--spacer--xs
  sm: convertRemStringToPx(t_global_spacer_sm.value),  // --pf-t--global--spacer--sm
  md: convertRemStringToPx(t_global_spacer_md.value), // --pf-t--global--spacer--md
  lg: convertRemStringToPx(t_global_spacer_lg.value), // --pf-t--global--spacer--lg
  xl: convertRemStringToPx(t_global_spacer_xl.value), // --pf-t--global--spacer--xl

  // Additional PatternFly spacers not in base Databricks spacing
  '2xl': convertRemStringToPx(t_global_spacer_2xl.value), // --pf-t--global--spacer--2xl
  '3xl': convertRemStringToPx(t_global_spacer_3xl.value), // --pf-t--global--spacer--3xl
  '4xl': convertRemStringToPx(t_global_spacer_4xl.value), // --pf-t--global--spacer--4xl
};