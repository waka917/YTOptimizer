//
//  ContentView.swift
//  YTOptimizer
//
//  Created by Ryusei on 2024/05/07.
//

import SwiftUI
import RealityKit
import RealityKitContent

struct ContentView: View {
    var body: some View {
        VStack {
            Image("Icon")
                .resizable()    // 画像サイズをフレームサイズに合わせる
                .frame(width: 150, height: 150) // フレームサイズの指定
            
            Text("- Please turn on the extension from “Settings > Apps > Safari > Extensions“.\n- Please use desktop mode in Safari.\n- Select “Manage Extensions“ from the Safari menu to customize the tap disable function.")
                .multilineTextAlignment(.leading)
        }
        .padding()
    }
}

#Preview(windowStyle: .automatic) {
    ContentView()
}
