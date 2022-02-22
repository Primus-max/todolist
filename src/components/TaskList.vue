<template>
	<h1>Список задач на сегодня</h1>
	<ul>
		<task-item :task="task" v-for="task in taskList" :key="task.valueCalendar"/>
	</ul>
</template>

<script>
    import TaskItem from "@/components/TaskItem";
    export default {
        components: {TaskItem},
        props: {
            taskList: {
                type: Array,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>