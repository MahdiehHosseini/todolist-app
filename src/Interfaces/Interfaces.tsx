export interface DateInterface {
    year: number,
    month: number,
    date: number
}
export interface TimeInterface {
    hour: number,
    minutes: number
}
//data interfaces
export interface TaskInterface {
    id : number ,
    title : string ,
    startTime : TimeInterface ,
    endTime : TimeInterface ,
    reminder : boolean ,
    autoDone : boolean ,
    date : DateInterface ,
    listId : number ,
    goalId : number ,
    done : boolean
}
export interface ListInterface {
    id : number ,
    title : string ,
    tasks : TaskInterface[] 
}
export interface HabitInterface {
    id : number ,
    title : string ,
    startTime : TimeInterface ,
    endTime : TimeInterface ,
    reminder : boolean ,
    addDate : DateInterface
}
export interface GoalInterface {
    id : number ,
    title : string ,
    term : string ,
    reachDate : DateInterface ,
    autoReach : boolean ,
    tasks : TaskInterface[] 
}
export interface TimeLineDataInterFace {
    time: string,
    percent: number
}
//components interfaces
export interface TasksListComponentInterface {
    title : string ,
    addOption : boolean , 
    tasksData : TaskInterface[]
}
export interface HabitsListComponentInterface {
    habitData : HabitInterface[]
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