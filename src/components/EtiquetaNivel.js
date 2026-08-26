import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {colors, spacing} from '../theme'

export  function EtiquetaNivel ({nivel}) {
    return(
        <View style={[style.contenedor, {backgroundColor: colors.fondo}]}>
            <Text style={style.texto}>
                {nivel}
            </Text>
        </View>
    )
}

export  function EtiquetaProfesor({profesor}) {
    return(
        <View style={[style.contenedor, {backgroundColor: colors.fondo}]}>
            <Text style={style.texto}>
                {profesor}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        alignSelf: 'auto',
        paddingVertical: 3,
        paddingHorizontal: spacing.md,
        borderRadius: full,
        borderWidth: 1
    },
    texto: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.3
    }
})

export default {EtiquetaNivel, EtiquetaProfesor}
