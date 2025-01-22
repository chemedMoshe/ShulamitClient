interface Prop{
    header:string,
    content:string
}
export default function ItemPost({header,content}:Prop) {
  return (
    <div key={header}>
      <h2>{header}</h2>
      <p>{content}</p>
    </div>
  )
}
