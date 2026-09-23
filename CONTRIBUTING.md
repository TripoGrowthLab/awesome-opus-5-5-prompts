# Share something worth building

Suggest games, scenes, assets, animation, simulations and interactive 3D experiences with a visible result and a traceable source. Use the **Suggest an example** issue form and include the creator, original post, actual model, reusable prompt, references and any code or demo links.

Do not edit generated READMEs or catalogs. Maintainers curate content and all 14 translations in Growth CMS, then run the sync workflow. Fix presentation in `templates/` or `scripts/lib/render.mjs`; change repository identity and model scope in `catalog.config.mjs`.

Keep actual model attribution separate from model compatibility. A scene that might work with another model is not evidence that its creator used that model. Preserve the author's original words in the CMS `originalPrompt` field when available; reconstructed build briefs belong in the prompt field with the appropriate evidence classification. Credit both the current author and the original author of remixes. Do not include private files, signed links or credentials.

For code contributions, use Node.js 22.16 or newer:

```sh
npm ci
npm run check
```

Checks run without CMS credentials. For live synchronization, see [maintenance](docs/maintaining.md). Every linked project keeps its own license; see [rights and attribution](RIGHTS.md).
