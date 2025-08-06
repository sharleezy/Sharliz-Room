import * as THREE from 'three'

/**
 * Converts all MeshStandardMaterials in the given materials object to MeshBasicMaterials.
 * Preserves texture maps, and transparency settings. If transparent, sets alphaTest.
 *
 * @param {Object} materials - Object containing materials (e.g., from useGLTF)
 * @param {number} alphaTest - Alpha test threshold to use for transparent materials
 * @returns {Object} - New object with converted MeshBasicMaterials
 */

export function convertMaterialsToBasic(materials, alphaTest = 0) {
  const newMaterials = {}

  Object.entries(materials).forEach(([key, material]) => {
    if (material.isMeshStandardMaterial) {
      const newMat = new THREE.MeshBasicMaterial({
        map: material.map,
        transparent: material.transparent,
        alphaTest: material.transparent ? 0.55 : alphaTest,
      })
      newMaterials[key] = newMat
    } else {
      // If not MeshStandardMaterial, keep the original or clone it
      newMaterials[key] = material.clone ? material.clone() : material
    }
  })

  return newMaterials
}
