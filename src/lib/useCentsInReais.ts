

export default function useCentsInReais(cents: number) {

    const reais = cents / 100;

    return reais.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    })
}