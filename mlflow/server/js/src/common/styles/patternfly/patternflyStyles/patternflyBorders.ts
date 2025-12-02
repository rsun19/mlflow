import {
  t_global_border_radius_sharp,
  t_global_border_radius_small,
  t_global_border_radius_medium,
  t_global_border_radius_large,
  t_global_border_radius_pill,
} from '@patternfly/react-tokens';
export const patternflyBorders = {
  borderRadius0: Number(t_global_border_radius_sharp.value.replace('px', '')),
  borderRadiusSm: Number(t_global_border_radius_small.value.replace('px', '')),
  borderRadiusMd: Number(t_global_border_radius_medium.value.replace('px', '')),
  borderRadiusLg: Number(t_global_border_radius_large.value.replace('px', '')),
  borderRadiusFull: Number(t_global_border_radius_pill.value.replace('px', '')),
};

export const patternflyLegacyBorders = {
  borderRadiusMd: Number(t_global_border_radius_medium.value.replace('px', '')),
  borderRadiusLg: Number(t_global_border_radius_large.value.replace('px', '')),
};
