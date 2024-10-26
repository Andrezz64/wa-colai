export default function RegisterPage() {
    return (
        <main>
            <div>
                <h1>Quer colar</h1>
                <form>
                    <label>
                        Username
                        <input type="text" />
                    </label>
                    <label>
                        Password
                        <input type="password" />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        </main>
    );
}