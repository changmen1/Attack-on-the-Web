
function ChildCom(props: { name: string, age: number }) {
    return (
        <div>
            这是子组件
            <span>姓名：{props.name} 年龄：{props.age}</span>
        </div>
    )
}

export default ChildCom;