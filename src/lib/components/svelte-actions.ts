/** Dispatch event on click outside of node */
export function clickOutside(node:any) {
   const handleClick = (event:any) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
         node.dispatchEvent(
            new CustomEvent('click_outside', node)
         )
      }
   }
   
   document.addEventListener('click', handleClick, true);
   return {
      destroy() {
         document.removeEventListener('click', handleClick, true);
      }
   }
}

// export function clickOutside(node) {
// 	// the node has been mounted in the DOM
	
// 	window.addEventListener('click', handleClick);
	
// 	function handleClick(e){   
//   if (!node.contains(e.target)){
//     node.dispatchEvent(new CustomEvent('outsideclick'))
//   }
// }

// 	return {
// 		destroy() {
// 			// the node has been removed from the DOM
// 			window.removeEventListener('click', handleClick)
// 		}
// 	};
// } 