"use client";

import { useRouter } from "next/navigation";
import { locais } from "@/locais";
import Link from "next/link";
import Paragraph from "@/app/components/Paragraph";

export default function DestinoDetalhe() {
    const router = useRouter();
    //const { slug } = router.query;

    const destino = locais.find((id) => id.slug === slug);

    if (!destino) {
        return (
            <p>
                <p>Destino não encontrado.</p>
                <Link href="/destinos">Voltar</Link>
            </p>
        );
    }

    return (
        <p>
            <h2>{destino.title}</h2>

            <img
                src={destino.image}
                alt={destino.title}
                style={{ width: "100%", maxWidth: "500px" }}
            />

            <p>{destino.description}</p>

            <Link href="/destinos">← Voltar para lista</Link>
        </p>
    );
}