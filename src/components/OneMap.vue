<template>
    <div class="balloon_map">
				<iframe :src="oneMap"
				width="90%" frameborder="0" style="border:0" allowfullscreen></iframe>
				<p class="mt-2">&times; CLOSE</p>
			</div>
</template>

<script>
export default {
	name: "oneMap",
	props: ["oneMap"],

}
</script>

<style scoped>
.balloon_map {
		position: relative;
		display: inline-block;
		margin: 0;
		padding: 10px 10px 0;
		min-width: 250px;
		width: 100%;
		color: #22313f;
		font-size: 16px;
		/* background: #FFF; */
		border: solid 3px #22313f;
		box-sizing: border-box;
		background-color: #fff;
	}

	.balloon_map::before {
		content: "";
		position: absolute;
		top: -24px;
		left: 50%;
		margin-left: -15px;
		border: 12px solid transparent;
		border-bottom: 12px solid;
		z-index: 2;
		margin-top: 0;
	}

	.balloon_map::after {
		content: "";
		position: absolute;
		top: -21px;
		left: 50%;
		margin-left: -15px;
		border: 12px solid transparent;
		border-bottom: 12px solid #fff;
		z-index: 2;
		margin-top: 0;
	}
</style>

