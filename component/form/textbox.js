import React from 'react'
import { Form } from 'react-bootstrap'

export default function Textbox(props) {
    const { label, error, name, value, placeholder, description, rows, as, onChange } = props
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} as={as} rows={rows} isInvalid={error}
            />

            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>

            <Form.Text className="text-muted">
                {description}
            </Form.Text>
        </Form.Group>
    )
}
