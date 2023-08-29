export const transition = {
   fast: 'transition-all duration-200 ease-in-out',
   normal: 'transition-all duration-300 ease-in-out',
   slow: 'transition-all duration-500 ease-in-out',
}

export const widths = `mx-auto w-[98%] xs:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%]`

export const flex = {
   center: `flex items-center justify-center`,
   col: {
      start: 'flex flex-col items-start justify-start',
   },
   row: {
      startCenter: 'flex flex-row items-center justify-start',
      betweenCenter: 'flex flex-row items-center justify-between',
      endCenter: 'flex flex-row items-center justify-end',
   }
}