
export interface TaskInterface {
    id : number ,
    title : string ,
    startTime : string ,
    endTime : string ,
    reminder : boolean ,
    autoDone : boolean ,
    date : string ,
    listId : number ,
    goalId : number ,
    done : boolean
}
export interface TasksListComponentInterface {
    title : string ,
    addOption : boolean , 
    tasksData : TaskInterface[]
}
export interface HabitsListComponentInterface {
    habitData : HabitInterface[]
}
export interface ListInterface {
    id : number ,
    title : string ,
    tasks : TaskInterface[] 
}
export interface HabitInterface {
    id : number ,
    title : string ,
    startTime : string ,
    endTime : string ,
    reminder : boolean ,
    addDate : string
}
export interface GoalInterface {
    id : number ,
    title : string ,
    term : string ,
    reachDate : string ,
    autoReach : boolean ,
    tasks : TaskInterface[] 
}
export interface GoalBoxComponentInterface {
    goalData : GoalInterface
}
export interface HabitBoxComponentInterface {
    habitData : HabitInterface
}
export interface ListBoxComponentInterface {
    listData : ListInterface
}
export interface TaskBoxComponentInterface {
    taskData : TaskInterface
}
export interface TimerComponentInterface {
    time : number
}
export interface ChartInterface {
    day : string ,
    person : number
}
export interface LineChartComponentInterface {
    chartData : ChartInterface[]
}