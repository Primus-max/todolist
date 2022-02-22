<template>
	<div class="about">
		<h1>Запланировать задачу</h1>
		<Splitter style="height: 500px">
			<SplitterPanel>
				<new-task @create="createTask"/>
			</SplitterPanel>
			<SplitterPanel>
<!--				<task-list :taskList="taskList"/>-->
			</SplitterPanel>
		</Splitter>


	</div>
</template>

<script>
    import NewTask from "@/components/NewTask";
    // import TaskList from "@/components/TaskList";

    export default {
        components: {NewTask},
        data() {
            return {

            }
        },
        // methods: {
        //     createTask(task) {
        //         console.log(task)
        //         this.taskList.push(task)
        //     }
        // }

    }

</script>

