function ChildCom1(props: { name: string }) {
    return (
        <div>
            子组件1
            姓名：{props.name}
        </div>
    );
}

export default ChildCom1;