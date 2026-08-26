import React, {useState, useEffect} from "react";
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { View, Text, StyleSheet, Pressable, Image, TextInput} from "react-native";

import {Ionicons} from '@expo/vector-icons'

import {EtiquetaNivel} from "./EtiquetaNivel";
import {colors, radius, spacing, typography} from '../theme'
import { formatearPrecio } from "../data/clases";

export default function ClasesScreen ({ navigation }) {
    const [nivel, setNivel] = useState()
    const [busqueda, setBusqueda] = useState('')

    return(
        <View>
            <Text>Aplicacion para clases de ingles</Text>
            <Ionicons name='search' size={18} color={colors.textoSuave} />
            <TextInput style={colors.primario} 
                       placeholder="Buscar por nivel"
                       value = {nivel}
                       onChangeText = {setNivel}
                       autoCorrect = {false}
            />
        </View>
    )
}

