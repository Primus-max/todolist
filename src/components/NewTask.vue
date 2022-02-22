<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>


	<div class="newtask-wrapper">
		<input-text
						v-model="task.title"
						style="margin-bottom: 25px; width: 500px"
						placeholder="добавить название заметки"
						type="text"
		/>
		<Textarea
            v-model="task.body"
            style="margin-bottom: 25px; width: 500px;
                min-height: 200px"
            placeholder="добавить описание заметки"
		/>
		<p>
			<Calendar
              v-model="task.valueCalendar"
              placeholder="добавить дату"
              icon="pi pi-calendar"
              showIcon="true"
              showTime="true"/>
			<Button @click="createTask"
              icon="pi pi-plus"
              label="добавить"
              class="p-button-success"
              style="margin-left: 136px"
			/>
		</p>
	</div>


</template>

<script>
    export default {
        name: 'NewTask',
        props: {
            msg: String,
            // modelValue: [String, Number],
            showTime: Boolean
        },
        data() {
            return {
                task: {
                    title: '',
                    body: '',
                    valueCalendar: null,
                }
            }
        },
        methods: {

            createTask() {
                this.$emit('create', this.task)
                this.task = {
                    title: '',
                    body: ''
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.newtask-wrapper {
		/*width: 600px;*/
		min-height: 500px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}


	.special-day {
		text-decoration: line-through;
	}
</style>
