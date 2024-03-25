import Vue from 'vue';
const isVue3 = Vue.version.startsWith('3');

export const EVENT_NAME_ACTIVATE_TAB = 'activate-tab';
export const EVENT_NAME_BLUR = 'blur';
export const EVENT_NAME_CANCEL = 'cancel';
export const EVENT_NAME_CHANGE = 'change';
export const EVENT_NAME_CHANGED = 'changed';
export const EVENT_NAME_CLICK = 'click';
export const EVENT_NAME_CLOSE = 'close';
export const EVENT_NAME_CONTEXT = 'context';
export const EVENT_NAME_CONTEXT_CHANGED = 'context-changed';
export const EVENT_NAME_DESTROYED = 'destroyed';
export const EVENT_NAME_DISABLE = 'disable';
export const EVENT_NAME_DISABLED = 'disabled';
export const EVENT_NAME_DISMISSED = 'dismissed';
export const EVENT_NAME_DISMISS_COUNT_DOWN = 'dismiss-count-down';
export const EVENT_NAME_ENABLE = 'enable';
export const EVENT_NAME_ENABLED = 'enabled';
export const EVENT_NAME_FILTERED = 'filtered';
export const EVENT_NAME_FIRST = 'first';
export const EVENT_NAME_FOCUS = 'focus';
export const EVENT_NAME_FOCUSIN = 'focusin';
export const EVENT_NAME_FOCUSOUT = 'focusout';
export const EVENT_NAME_HEAD_CLICKED = 'head-clicked';
export const EVENT_NAME_HIDDEN = 'hidden';
export const EVENT_NAME_HIDE = 'hide';
export const EVENT_NAME_IMG_ERROR = 'img-error';
export const EVENT_NAME_INPUT = 'input';
export const EVENT_NAME_LAST = 'last';
export const EVENT_NAME_MOUSEENTER = 'mouseenter';
export const EVENT_NAME_MOUSELEAVE = 'mouseleave';
export const EVENT_NAME_NEXT = 'next';
export const EVENT_NAME_OK = 'ok';
export const EVENT_NAME_OPEN = 'open';
export const EVENT_NAME_PAGE_CLICK = 'page-click';
export const EVENT_NAME_PAUSED = 'paused';
export const EVENT_NAME_PREV = 'prev';
export const EVENT_NAME_REFRESH = 'refresh';
export const EVENT_NAME_REFRESHED = 'refreshed';
export const EVENT_NAME_REMOVE = 'remove';
export const EVENT_NAME_ROW_CLICKED = 'row-clicked';
export const EVENT_NAME_ROW_CONTEXTMENU = 'row-contextmenu';
export const EVENT_NAME_ROW_DBLCLICKED = 'row-dblclicked';
export const EVENT_NAME_ROW_HOVERED = 'row-hovered';
export const EVENT_NAME_ROW_MIDDLE_CLICKED = 'row-middle-clicked';
export const EVENT_NAME_ROW_SELECTED = 'row-selected';
export const EVENT_NAME_ROW_UNHOVERED = 'row-unhovered';
export const EVENT_NAME_SELECTED = 'selected';
export const EVENT_NAME_SHOW = 'show';
export const EVENT_NAME_SHOWN = 'shown';
export const EVENT_NAME_SLIDING_END = 'sliding-end';
export const EVENT_NAME_SLIDING_START = 'sliding-start';
export const EVENT_NAME_SORT_CHANGED = 'sort-changed';
export const EVENT_NAME_TAG_STATE = 'tag-state';
export const EVENT_NAME_TOGGLE = 'toggle';
export const EVENT_NAME_UNPAUSED = 'unpaused';
export const EVENT_NAME_UPDATE = 'update';

export const HOOK_EVENT_NAME_BEFORE_DESTROY = isVue3 ? 'vnodeBeforeUnmount' : 'hook:beforeDestroy';
export const HOOK_EVENT_NAME_DESTROYED = isVue3 ? 'vNodeUnmounted' : 'hook:destroyed';

export const MODEL_EVENT_NAME_PREFIX = 'update:';

export const ROOT_EVENT_NAME_PREFIX = 'bv';
export const ROOT_EVENT_NAME_SEPARATOR = '::';

export const EVENT_OPTIONS_PASSIVE = { passive: true };
export const EVENT_OPTIONS_NO_CAPTURE = { passive: true, capture: false };