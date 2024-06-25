import Pressuru from 'url:../assets/fonts/Pressuru/Pressuru.ttf';
import OswaldRegular from 'url:../assets/fonts/Oswald/Oswald-Regular.ttf';
import OswaldBold from 'url:../assets/fonts/Oswald/Oswald-Bold.ttf';
import RobotoRegular from 'url:../assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from 'url:../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoCondensedRegular from 'url:../assets/fonts/RobotoCondensed/RobotoCondensed-Regular.ttf';
import RobotoCondensedBold from 'url:../assets/fonts/RobotoCondensed/RobotoCondensed-Bold.ttf';
import CourierPrimeRegular from 'url:../assets/fonts/CourierPrime/CourierPrime-Regular.ttf';
import CourierPrimeBold from 'url:../assets/fonts/CourierPrime/CourierPrime-Bold.ttf';
import OpenSansRegular from 'url:../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansBold from 'url:../assets/fonts/OpenSans/OpenSans-Bold.ttf';

export const customFonts = [
  { name: 'Pressuru', label: 'Pressuru', path: Pressuru, style: 'normal', weight: '400' },
  { name: 'Oswald-Regular', label: 'Oswald', path: OswaldRegular, style: 'normal', weight: '400' },
  { name: 'Oswald-Bold', label: 'Oswald Bold', path: OswaldBold, style: 'normal', weight: '700' },
  { name: 'Roboto-Regular', label: 'Roboto', path: RobotoRegular, style: 'normal', weight: '400' },
  { name: 'Roboto-Bold', label: 'Roboto Bold', path: RobotoBold, style: 'normal', weight: '700' },
  {
    name: 'RobotoCondensed-Regular',
    label: 'Roboto Condensed',
    path: RobotoCondensedRegular,
    style: 'normal',
    weight: '400'
  },
  {
    name: 'RobotoCondensed-Bold',
    label: 'Roboto Condensed Bold',
    path: RobotoCondensedBold,
    style: 'normal',
    weight: '700'
  },
  {
    name: 'CourierPrime-Regular',
    label: 'Courier Prime',
    path: CourierPrimeRegular,
    style: 'normal',
    weight: '400'
  },
  {
    name: 'CourierPrime-Bold',
    label: 'Courier Prime Bold',
    path: CourierPrimeBold,
    style: 'normal',
    weight: '700'
  },
  {
    name: 'OpenSans-Regular',
    label: 'Open Sans',
    path: OpenSansRegular,
    style: 'normal',
    weight: '400'
  },
  {
    name: 'OpenSans-Bold',
    label: 'Open Sans Bold',
    path: OpenSansBold,
    style: 'normal',
    weight: '400'
  }
];

export const loadCustomFont = async (name, path, options = {}) => {
  try {
    const font = new FontFace(name, `url(${path})`, { ...options });
    await font.load();
    document.fonts.add(font);
  } catch (err) {
    console.error(err);
  }
};
