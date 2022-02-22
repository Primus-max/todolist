<template>
	<li class="post">
		<p><strong>Название задачи:</strong>{{task.title}}</p>
		<p><strong>Название задачи:</strong>{{task.body}}</p>
	</li>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
	.post{
		align-self: flex-start;
	}

</style>