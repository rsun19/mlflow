// PatternFly border radius tokens override for Databricks Design System
// Based on PatternFly's border radius token system
import { t_global_border_radius_sharp, t_global_border_radius_small, t_global_border_radius_medium, t_global_border_radius_large, t_global_border_radius_pill } from '@patternfly/react-tokens';
export const patternflyBorders = {
  // PatternFly border radius tokens:
  borderRadius0: Number(t_global_border_radius_sharp.value.replace('px', '')),
  borderRadiusSm: Number(t_global_border_radius_small.value.replace('px', '')),
  borderRadiusMd: Number(t_global_border_radius_medium.value.replace('px', '')),
  borderRadiusLg: Number(t_global_border_radius_large.value.replace('px', '')),
  borderRadiusFull: Number(t_global_border_radius_pill.value.replace('px', '')),
};

// Legacy borders for compatibility (same as new borders in this case)
export const patternflyLegacyBorders = {
  borderRadiusMd: Number(t_global_border_radius_medium.value.replace('px', '')),
  borderRadiusLg: Number(t_global_border_radius_large.value.replace('px', '')),
};