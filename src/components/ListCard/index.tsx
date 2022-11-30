import { ImageEditor, TouchableOpacityProps } from 'react-native'

import {
    Container,
    TextTitle,
    TextCard
} from './styles'

interface ListInvoiceProps {
    id: string,
    description: string,
    invoice_value: string,
    issue_Date: Date,
    client: string,
}

interface ListCardProps extends TouchableOpacityProps {
    item: ListInvoiceProps;
}


export function ListCard({ item, ...rest }: ListCardProps) {

    function CalPiss(invoice: number) {
        return parseFloat((invoice * 0.65 / 100).toFixed(2))
    }

    function CalConfis(invoice: number) {
        return parseFloat((invoice * 3 / 100).toFixed(2))
    }

    function CalCsll(invoice: number) {
        return parseFloat((invoice * 1 / 100).toFixed(2))
    }

    function CalIss(invoice: number) {
        return parseFloat((invoice * 4 / 100).toFixed(2))
    }

    function CalValorLNF(invoice: number) {
        return invoice - CalPiss(invoice) - CalConfis(invoice) - CalIss(invoice)
    }

    return (
        <Container
            {...rest}
            key={item.id}>
            <TextTitle>Dados da Nota Fiscal</TextTitle>
            <TextCard>Descrição do Serviço: {item.description}</TextCard>
            <TextCard>Valor da NF: {item.invoice_value}</TextCard>
            <TextCard>Data da NF: {new Date(item.issue_Date).toLocaleDateString()}</TextCard>
            <TextCard>Cliente: {item.client}</TextCard>
            <TextCard>Piss: {CalPiss(Number(item.invoice_value))} </TextCard>
            <TextCard>Confis: {CalConfis(Number(item.invoice_value))}</TextCard>
            <TextCard>Csll: {CalCsll(Number(item.invoice_value))}</TextCard>
            <TextCard>Iss: {CalIss(Number(item.invoice_value))}</TextCard>
            <TextCard>Valor liquido da NF: {CalValorLNF(Number(item.invoice_value))}</TextCard>
        </Container>
    )
}


