<script>
	export let size = 100;
	export let norm = 'fill-accent-d1';
	export let strokeDark = 'stroke-accent-d3';
	export let transition = 'transition-all duration-500 ease-in-out';

	const calcSize = size * 0.6;
   let width = calcSize / 1.15;
</script>

<svg 
   width="{width}" height="{calcSize}" 
   viewBox="0 0 80 92"
   xmlns="http://www.w3.org/2000/svg">
   <g id="Frame 32" class="opacity-70">
		<g id="Subtract">
			<!-- Head -->
         <path
				d="M47.8123 4.19602C49.9176 6.32671 50.9702 8.89773 50.9702 11.9091C50.9702 14.9205 49.9176 17.4915 47.8123 19.6222C45.7071 21.7529 43.1667 22.8182 40.1913 22.8182C37.2158 22.8182 34.6755 21.7529 32.5702 19.6222C30.4649 17.4915 29.4123 14.9205 29.4123 11.9091C29.4123 8.89773 30.4649 6.32671 32.5702 4.19602C34.6755 2.06534 37.2158 1 40.1913 1C43.1667 1 45.7071 2.06534 47.8123 4.19602Z"
				class="{strokeDark} stroke-2 {norm}"
			/>
         <!-- Body -->
			<path
				d="M48.8352 24.9981C45.6021 25.363 42.7208 25.5455 40.1913 25.5455C37.3217 25.5455 33.9995 25.3107 30.2245 24.8411C32.7307 25.8959 34.2363 28.5984 33.6856 31.3694C33.2332 33.6456 31.5165 35.3486 29.4108 35.8932C29.2961 44.8184 28.8615 52.4203 28.107 58.6989C27.3491 65.0057 26.6053 69.4233 25.8754 71.9517C25.1456 74.4801 23.9947 77.7614 22.4228 81.7955L21.6649 83.5852C21.1035 85.0057 21.1316 86.3977 21.7491 87.7614C22.3667 89.125 23.3772 90.0909 24.7807 90.6591C25.286 90.8864 25.9316 91 26.7176 91C29.1877 91 30.872 89.8352 31.7702 87.5057L32.4439 85.8011C35.4755 77.9034 37.4685 70.5455 38.4228 63.7273H41.9597C42.9141 70.5455 44.9071 77.9034 47.9387 85.8011L48.6123 87.5057C49.5106 89.8352 51.1948 91 53.665 91C54.4509 91 55.0966 90.8864 55.6018 90.6591C57.0053 90.0909 58.0158 89.125 58.6334 87.7614C59.251 86.3977 59.279 85.0057 58.7176 83.5852L57.9597 81.7955C56.3878 77.7614 55.2369 74.4801 54.5071 71.9517C53.7772 69.4233 53.0334 65.0057 52.2755 58.6989C51.5269 52.4698 51.0933 44.9382 50.9745 36.1041C48.4851 35.8171 46.3556 33.9593 45.8409 31.3695C45.3214 28.7556 46.607 26.2017 48.8352 24.9981Z"
				class="{strokeDark} stroke-2 {norm}"
			/>
		</g>
      
      <!-- Arms -->
		<g id="Group 8" class="">
         <!-- Right Arm -->
			<rect
				id="Rectangle 32"
				rx="6"
				class="
               {transition}
               {norm} {strokeDark} stroke-2 origin-top-left
               w-9 h-3 opacity-70
               translate-x-[54%] group-hover:translate-x-[63%]
               translate-y-[32%] group-hover:translate-y-[24%]
               -rotate-[40deg] group-hover:rotate-[45deg]
               "
			/>
         <!-- Left Arm -->
			<rect
				id="Rectangle 33"
				rx="6"
				class="
               {transition}
               {norm} {strokeDark} stroke-2 origin-top
               w-9 h-3 opacity-70
               translate-x-[1%] group-hover:-translate-x-[7%]
               translate-y-[35%] group-hover:translate-y-[21%]
               rotate-[40deg] group-hover:-rotate-[45deg]
               "
			/>
		</g>
	</g>
</svg>
