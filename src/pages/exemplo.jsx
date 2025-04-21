import Cabecalho from "@/components/Cabecalho";
import Layout from "@/components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo='Usando componentes'>
      <Cabecalho titulo="Fundamentos de Next.js & React" />
      <Cabecalho titulo="Aprendendo next na pratica" />
    </Layout>
  );
}
