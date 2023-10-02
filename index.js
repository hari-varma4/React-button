const Button = props => {
  //  Write your code here.

{className,text}=props
return <button className={`button ${className}`} >{text}</button>


}

const element = (
  //  Write your code here.
<div className="bg">

<h1 className="h">Social Buttons</h1>
<div className="bb">
    <Button className="y" text="Like"/>
    <Button className="w" text="Comment"/>
    <Button className="b" text="Share"/>
</div>

</div>

)

ReactDOM.render(element, document.getElementById('root'))
