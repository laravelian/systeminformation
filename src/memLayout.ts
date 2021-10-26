'use strict';

import { nixMemLayout } from './linux/memLayout';
import { darwinMemLayout } from './darwin/memLayout';
import { windowsMemLayout } from './windows/memLayout';
import { MemLayoutData } from './common/types';

import { AIX, ANDROID, DARWIN, FREEBSD, LINUX, NETBSD, SUNOS, WINDOWS } from './common/const';
import { nextTick } from './common';

export const memLayout = async () => {
  await nextTick();
  switch (true) {
    case LINUX || NETBSD || FREEBSD:
      return nixMemLayout();
    case DARWIN:
      return darwinMemLayout();
    case WINDOWS:
      return windowsMemLayout();
    default:
      return null;
  }
};