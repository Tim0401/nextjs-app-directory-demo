const Nl2br = ({ children }: { children: string }) => (
  <>
    {children.split(/(\n)/g).map((t, index) => (t === '\n' ? <br key={index} /> : t))}
  </>
)

export default Nl2br;
