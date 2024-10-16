interface PropType {
    text: string
  }
  
  
  export default function PageTitle({ text }: PropType) {
    return (
      <h1 className="text-center font-sans text-4xl font-bold m-6 text-text">
        {text}
      </h1>
    );
  }