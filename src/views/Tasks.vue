<template>
	<div class="home">
		<task-list @create="createTask" :taskList="taskList"/>
	</div>

</template>

<script>
    // @ is an alias to /src
    import TaskList from "@/components/TaskList";



    export default {
        name: 'Tasks',
        components: {
            TaskList,

        },
        data() {
            return {
                taskList: [],
            }
        },
        methods: {
            createTask(task) {
                console.log(task)
                this.taskList.push(task)
                // console.log(this.taskList)
            }
        }

    }
</script>
