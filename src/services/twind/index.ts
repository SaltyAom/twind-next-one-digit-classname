// ? This file is for tw className without hashing on dev env.
interface LiteralTemplateInput {
    0: string[]
    raw: string[]
}

export const setup = (input: any) => null
export const tw = (input: string | LiteralTemplateInput) => {
    let inParenthesis = false

    let value = typeof input === 'object' ? input.raw[0] : input

    let classNames = value
        .split(' ')
        .map((className) => {
            if (!className.startsWith('text(')) return className

            if (!inParenthesis) inParenthesis = true

            if (className.endsWith(')')) inParenthesis = false

            return `text-${className.replace('text(', '').replace(')', '')}`
        })
        .join(' ')

    return classNames
}
