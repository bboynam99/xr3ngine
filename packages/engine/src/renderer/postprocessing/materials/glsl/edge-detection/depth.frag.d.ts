declare const _default: "#include <packing>\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n\n\tuniform highp sampler2D depthBuffer;\n\n#else\n\n\tuniform mediump sampler2D depthBuffer;\n\n#endif\n\nvarying vec2 vUv;\nvarying vec2 vUv0;\nvarying vec2 vUv1;\n\nfloat readDepth(const in vec2 uv) {\n\n\t#if DEPTH_PACKING == 3201\n\n\t\treturn unpackRGBAToDepth(texture2D(depthBuffer, uv));\n\n\t#else\n\n\t\treturn texture2D(depthBuffer, uv).r;\n\n\t#endif\n\n}\n\n/**\n * Gathers the current texel, and the top-left neighbors.\n */\n\nvec3 gatherNeighbors() {\n\n\tfloat p = readDepth(vUv);\n\tfloat pLeft = readDepth(vUv0);\n\tfloat pTop = readDepth(vUv1);\n\n\treturn vec3(p, pLeft, pTop);\n\n}\n\nvoid main() {\n\n\tconst vec2 threshold = vec2(DEPTH_THRESHOLD);\n\n\tvec3 neighbors = gatherNeighbors();\n\tvec2 delta = abs(neighbors.xx - vec2(neighbors.y, neighbors.z));\n\tvec2 edges = step(threshold, delta);\n\n\tif(dot(edges, vec2(1.0)) == 0.0) {\n\n\t\tdiscard;\n\n\t}\n\n\tgl_FragColor = vec4(edges, 0.0, 1.0);\n\n}\n";
export default _default;
