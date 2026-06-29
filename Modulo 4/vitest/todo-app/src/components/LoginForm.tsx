    // src/components/LoginForm.tsx
    import { useState } from 'react';

    interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
    }

    export function LoginForm({ onLogin }: LoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onLogin(username, password);
    }

    return (
        <form onSubmit={handleSubmit} aria-label="Formulario de acceso">
        {/* Label asociada por htmlFor + id → getByLabelText */}
        <label htmlFor="username">Usuario</label>
        <label htmlFor="username">Incluye usuario</label>
        <input
            id="username"
            value={username}
            placeholder="Tu usuario"
            onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
            id="password"
            type="password"
            value={password}
            placeholder="Tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        <a href="https://www.google.com">Ir a google</a>
        </form>

    );
    }