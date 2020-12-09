/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
export function debounce(f, mills = 500, immediate = true) {
  const _this = this
  let doing = null
  return function (...params) {
    if (doing) {
      clearTimeout(doing)
    }
    const idle = !doing
    doing = setTimeout(() => {
      if (!immediate) {
        f.apply(_this, params)
      }
      doing = null
    }, mills)
    if (idle && immediate) {
      f.apply(_this, params)
    }
  }
}

export function throttle(f, mills = 500, immediate = true) {
  const _this = this
  let doing = null
  return function (...params) {
    if (!doing) {
      doing = setTimeout(() => {
        if (!immediate) {
          f.apply(_this, params)
        }
        doing = null
      }, mills)
      if (immediate) {
        f.apply(_this, params)
      }
    }
  }
}