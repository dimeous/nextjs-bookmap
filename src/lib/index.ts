export const getUTMUrlDependsOnPage = (page: string | undefined, and = false): string => {
  const prefix = and ? '&' : '?'
  if (page === 'getbookmapnow')
    return (
      prefix +
      'utm_medium=ppc&utm_source=google&utm_campaign=Multibook_new_landing&utm_content=New_landing'
    )
  if (page === 'orderflow')
    return (
      prefix +
      'utm_medium=ppc&utm_source=google&utm_campaign=GIFs_new_landing&utm_content=GIFs_New_landing'
    )
  return ''
}

export const isGetBookMapNow = (page: string | undefined): boolean => {
  if (page === 'getbookmapnow' || page === 'orderflow') return true
  return false
}
