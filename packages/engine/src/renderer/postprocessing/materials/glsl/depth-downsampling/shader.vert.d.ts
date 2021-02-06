declare const _default: "uniform vec2 texelSize;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n\tvec2 uv = position.xy * 0.5 + 0.5;\n\n\tvUv0 = uv;\n\tvUv1 = vec2(uv.x, uv.y + texelSize.y);\n\tvUv2 = vec2(uv.x + texelSize.x, uv.y);\n\tvUv3 = uv + texelSize;\n\n\tgl_Position = vec4(position.xy, 1.0, 1.0);\n\n}\n";
export default _default;
